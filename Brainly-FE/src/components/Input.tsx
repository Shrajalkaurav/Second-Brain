interface InputProps {
  ref: any;
  placeholder: string;
  type?: string;
}
export function Input({ ref, placeholder, type }: InputProps) {
  return (
    <div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="px-4 py-2 border rounded m-2"
      />
    </div>
  );
}
