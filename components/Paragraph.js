const Paragraph = ({ children, className }) => {
    return (
        <h1 className={`text-xl font-medium text-gray-500 ${className}`}>
            {children}
        </h1>
    )
}

export default Paragraph;