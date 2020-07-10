import React, {useState, useEffect} from "react";
import Cards from "./Card";
import Graph from "./Graph";
import covid from "./covid2.png";
import { Navbar, FormControl, Dropdown } from "react-bootstrap";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href="#home"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
    &#x25bc;
    </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);


function Header() {
    let [GlobalCases, setGlobalCases] = useState({});
    let [CountriesCases, setCountriesCases] = useState({});
    let [Index,setIndex]=useState(186);
    let [CountryData, setCountryData] = useState({});
    let SelectCountry;
    useEffect(() => {
        async function getGlobalData() {
            const response = await fetch("https://api.covid19api.com/summary");
            let data = await response.json();
            setGlobalCases(data.Global);
            setCountriesCases(data.Countries);
            console.log(data);
        }
        getGlobalData();
    }, []);
    useEffect(() => {
        async function getRegularData() {
            if(Index < 186){
                let url = "https://api.covid19api.com/dayone/country/" + SelectCountry;
                const response2 = await fetch(url);
                let data2 = await response2.json();
                setCountryData(data2);
                console.log(data2);
            } else {
                console.log("Resist Api from running...");
            }  
        }
        getRegularData();
    }, [SelectCountry, Index]);
    if (Index < 186) {
        SelectCountry = CountriesCases[Index].Slug;
    } else {
        SelectCountry = "";
    }
    return (
        <div>
            <Navbar style={{ backgroundColor: "white", justifyContent: "center" }}>
                <Navbar.Brand href="#home"><h1>C<img src={covid} alt="covid-icon" />VID</h1></Navbar.Brand>
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        {SelectCountry === "" ? "Global" : SelectCountry.toUpperCase()}
                </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item onClick={()=> setIndex(186)} eventKey="186" value="186" className="Name">Global</Dropdown.Item>
                        {Object.keys(CountriesCases).map((key, ind) => {
                            return (
                                <Dropdown.Item onClick={()=> setIndex(key)}  eventKey={key} key={ind} className="Name">{CountriesCases[key].Country}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar>
            <Cards indexer={Index} GlobalCases={GlobalCases} CountriesCases={CountriesCases} />
            <Graph CountryData={CountryData} GlobalData={GlobalCases} indexer={Index}/>
        </div>   
    )
}

export default Header;