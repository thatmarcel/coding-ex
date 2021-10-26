const Heading1 = ({ children, className }) => {
    return (
        <h1 className={`text-2xl md:text-5xl font-black ${className}`}>
            {children}
        </h1>
    )
}

export default Heading1;