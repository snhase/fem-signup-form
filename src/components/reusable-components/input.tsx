import React from 'react';

interface Props {
  label: string;
  type?:string;
  value?:string;
}

export function Input({ label, type, value }: Props) {
  const id = label.replace(/ /gm, '_').toLowerCase();
  
  return (
    <div>
      <div>
        <input
        id={id}
        className="block w-full my-5 p-4 border-2 border-slate-300 rounded-md
        focus:border-b-2 focus:border-1 focus:border-[hsla(249,10%,26%,1)]"
        value={value}
        placeholder={label}
        type={type}
        autoComplete="off"
        />
      </div>
    </div>
  );
}
