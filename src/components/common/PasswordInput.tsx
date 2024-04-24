import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md';

interface PasswordInputProps {
    value?: string;
    onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ onChange, value }) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        onChange ? onChange(event.target.value) : null;
    };

    return (
        <div className="relative flex items-center w-full">
            <input
                type="password"
                value={value}
                onChange={handleChange}
                placeholder="Password"
                className={
                    'p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300 w-full'
                }
            />
            <div className="absolute right-0 mr-2.5">
                <MdOutlineVisibility className="cursor-pointer" size={24} />
            </div>
        </div>
    );
};

export default PasswordInput;
