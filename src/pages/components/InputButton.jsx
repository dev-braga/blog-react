function InputButton({ text_button, className}){
    return (
        <button
            type="submit"
            className={className}
            >
            {text_button}
        </button>
    )
}

export default InputButton;