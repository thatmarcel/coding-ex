const Byline = ({ children, className }) => {
    return (
        <h1 className={`text-lg md:text-2xl font-bold text-gray-600 ${className}`}>
            {children}
        </h1>
    )
}

export default Byline;