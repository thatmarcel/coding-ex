const Heading3 = ({ children, className }) => {
    return (
        <h1 className={`text-xl md:text-4xl font-bold text-gray-700 ${className}`}>
            {children}
        </h1>
    )
}

export default Heading3;