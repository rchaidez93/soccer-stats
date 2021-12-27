import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { useRouter } from '../hooks/useRouter';
import PremierLeagueLogo from '../images/leageLogoLion.png'

const useStyles = makeStyles((theme) => ({
toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
},
toolbarTitle: {
    flex: 1,
    color: theme.palette.text.primary,
},
toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
},
toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    color: theme.palette.text.primary,
},
}));

const Header = ({title, sections}) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <>
            <Toolbar className={classes.toolbar}>
                <Avatar src={PremierLeagueLogo} sizes="medium" />
                <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
                >
                {title}
                </Typography>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <div key={section.title}>
                        {section.title==='Home' ? (
                            <IconButton 
                            size='small' 
                            disableFocusRipple
                            disableRipple
                            onClick={() => router.push(section.url)}
                             >
                                <Link
                                color="inherit"
                                noWrap
                                key={section.title}
                                variant="body2"
                                className={classes.toolbarLink}
                                >
                                    <HomeIcon />
                                </Link>            
                            </IconButton>
                        ):(
                            <Link
                            // color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            component="button"
                            onClick={() => router.push(`${section.url}`)}
                            className={classes.toolbarLink}
                            >
                                {section.title}
                            </Link>    
                        )}
                    </div>
                ))}
            </Toolbar>
        </>
    );
};

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};

export default Header;