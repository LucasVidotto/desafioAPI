import { Link } from "react-router-dom";
import { BoxNav,CardLabel,CardsNav } from "../Style/NavStyled";

const Nav = () => {
    return(
        <>
            <BoxNav>
                <CardsNav >
                    <CardLabel>
                        <Link to={{pathname:"/dashboard"}}>
                        Menu
                        </Link>
                    </CardLabel>
                </CardsNav>
                <CardsNav >
                    <CardLabel>
                        <Link to={{pathname:"/deposito"}}>
                        Deposito
                        </Link>
                    </CardLabel>
                </CardsNav>
                <CardsNav >
                    <CardLabel>
                        <Link to={{pathname:"/saque"}}>
                            Saque
                        </Link>
                    </CardLabel>
                </CardsNav>
            </BoxNav>
        </>
    )
}

export default Nav;