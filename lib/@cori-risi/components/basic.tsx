import React from "react";

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} />
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />
}

export function Label(props: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} />
}
