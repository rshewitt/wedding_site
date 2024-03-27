const Credit = () => {
    const thisYear = new Date().getFullYear();
    return (
        <div className="py-20 bg-background text-gray-700 relative text-center font-sans">
        © {thisYear} forked from 
            <a 
            className="font-semibold" 
            href="https://github.com/fauzialz/amifauzi.com-open" 
            target={"_blank"} 
            rel="noreferrer"> Fauzi</a>
      </div>
    )
}

export default Credit;