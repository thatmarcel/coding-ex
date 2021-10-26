const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-3xl md:text-6xl font-black ${className}`}>
            {children}
        </h1>
    )
}

export default Heading1;