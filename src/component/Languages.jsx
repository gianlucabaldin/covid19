import React from 'react';
import { ButtonGroup, Button, makeStyles } from '@material-ui/core';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  group: { marginRight: '20px' },
  button: { border: 0 },
});

const Languages = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  return (
    <>
      <ButtonGroup
        color="primary"
        aria-label="outlined primary button group"
        data-test-id="language-container"
        className={classes.group}
      >
        <Button
          onClick={() => i18n.changeLanguage('it')}
          data-test-id="language-ita"
          className={classes.button}
        >
          <Flag
            code="IT"
            height={16}
            onClick={() => i18n.changeLanguage('it')}
          />
        </Button>
        <Button
          onClick={() => i18n.changeLanguage('en')}
          data-test-id="language-eng"
          className={classes.button}
        >
          <Flag code="GBR" height={16} />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default Languages;
