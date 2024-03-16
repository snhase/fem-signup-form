
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { SignupForm } from './signup-form';

describe('SignupForm', () => {
  test('render', () => {
    render(<SignupForm />);
    screen.getByPlaceholderText('First Name');
    screen.getByPlaceholderText('Last Name');
    screen.getByPlaceholderText('Email Address');
    screen.getByPlaceholderText('Password');
  });

  test('Form displays errors and button is disabled if button is clicked without touching input fields', () => {
    render(<SignupForm />);
    const handleOnSubmit = jest.fn();
    screen.getByRole("form").onsubmit = handleOnSubmit;
    fireEvent.click(screen.getByText("Claim your free trial"));
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("First Name cannot be empty");
    expect(screen.getAllByRole("error")[1]?.textContent).toContain("Last Name cannot be empty");
    expect(screen.getAllByRole("error")[2]?.textContent).toContain("Email Address cannot be empty");
    expect(screen.getAllByRole("error")[3]?.textContent).toContain("Password cannot be empty");
    const button = screen.getByRole("button");
    expect(button).toHaveProperty('disabled',true);
  });

  test('Button is disabled if any input value is empty', () => {
    render(<SignupForm />);
    fireEvent.blur(screen.getByPlaceholderText("First Name"), {
      target: { value:"" }
    });
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("First Name cannot be empty");
    const button = screen.getByRole("button");
    expect(button).toHaveProperty('disabled',true);
  });

  test('If last name is empty, error message displayed and onSubmit not called', () => {
    render(<SignupForm />)
    const handleOnSubmit = jest.fn();
    screen.getByRole("form").onsubmit = handleOnSubmit;
    fireEvent.blur(screen.getByPlaceholderText("Last Name"), {
      target: { value:"" }
    })
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Last Name cannot be empty");
    //onSubmit is not called
    expect(handleOnSubmit).not.toHaveBeenCalled();
  })

  test('If email address is invalid - error message displayed and onSubmit not called', () => {
    render(<SignupForm />)
    const handleOnSubmit = jest.fn();
    screen.getByRole("form").onsubmit = handleOnSubmit;
    fireEvent.blur(screen.getByPlaceholderText("Email Address"), {
      target: { value:"abcd" }
    })
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Looks like this is not an email");
    expect(handleOnSubmit).not.toHaveBeenCalled();
    fireEvent.blur(screen.getByPlaceholderText("Email Address"), {
      target: { value:"abcd@domain" }
    })
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Looks like this is not an email");
    expect(handleOnSubmit).not.toHaveBeenCalled();
  })

  test('If password is invalid password - error message displayed and onSubmit not called',
  () => {
    render(<SignupForm />)
    const handleOnSubmit = jest.fn();
    screen.getByRole("form").onsubmit = handleOnSubmit;
    //password invalid - blank input
    fireEvent.blur(screen.getByPlaceholderText("Password"), {
      target: { value:"" }
    });
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Password cannot be empty")
    expect(handleOnSubmit).not.toHaveBeenCalled()

    //password invalid - length with accepted range but contains only letters
    fireEvent.blur(screen.getByPlaceholderText("Password"), {
      target: { value:"aaaaaaaa" }
    });
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Password must contain at least 1 letter (a-zA-Z), 1 number (0-9) and at least 8 characters.")
    expect(handleOnSubmit).not.toHaveBeenCalled()

    //password invalid - zxcvbn passwordStrength less than 2
    fireEvent.blur(screen.getByPlaceholderText("Password"), {
      target: { value:"aaaaaaa1" }
    });
    expect(screen.getAllByRole("error")[0]?.textContent).toContain("Password chosen is weak. Try using random combination of words, letters, numbers and symbols.")
    expect(handleOnSubmit).not.toHaveBeenCalled()
  });

  test('All valid input onSubmit is called',() => {
    const setSignup = jest.fn();
    render(<SignupForm setSignup={setSignup}/>)
    const handleOnSubmit = jest.fn();
    screen.getByRole("form").onsubmit = handleOnSubmit;
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value:"Jane" }
    });
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value:"Doe" }
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value:"abcd@domain.com" }
    });
    fireEvent.blur(screen.getByPlaceholderText("Password"), {
    target: { value:"qwerty123" }
    });
    fireEvent.click(screen.getByText("Claim your free trial"));
    expect(handleOnSubmit).toHaveBeenCalled();
  })
  
});
