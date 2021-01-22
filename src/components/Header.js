import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className={'header'}>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Cancel' : 'Add Task'}
                    onClick={onAdd}/>
        </header>
    );
};

Header.defaultProps =
    {
        title: 'React Task Manager'
    }

Header.propTypes =
    {
        title: PropTypes.string.isRequired,
    }

// css in js
// const headingStyle = {
//     color: 'red',
//     background: 'black'
// }
export default Header;