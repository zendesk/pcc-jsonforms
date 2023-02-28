import { Fragment, useState } from 'react';
import { JsonForms, withJsonFormsControlProps } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import './App.css';
import schema from './schema.json';
import jsltData from './jsltData.json';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import { makeStyles } from '@mui/styles';
import { GenericRenderer } from './GenericRenderer';
import { RankedTester, rankWith, Tester } from '@jsonforms/core';

const useStyles = makeStyles({
  '&$disabled': {
    color: 'black !important',
  },

  container: {
    padding: '1em',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '0.25em',
    backgroundColor: '#cecece',
    marginBottom: '1rem',
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
});

const rootNodeTester: Tester = (_uischema, schema, context) =>
  schema === context.rootSchema;
const genericTester: RankedTester = rankWith(3, rootNodeTester);
const GenericRendererWithProps = withJsonFormsControlProps(GenericRenderer);
const genericRendering = [
  { tester: genericTester, renderer: GenericRendererWithProps },
];

const App = () => {
  const classes = useStyles();
  const [data] = useState<any>(jsltData);

  return (
    <Fragment>
      <Grid
        container
        justifyContent={'center'}
        spacing={1}
        className={classes.container}
      >
        <Grid item sm={6}>
          <h4 className={classes.title}>JSON Schema Render</h4>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              data={data}
              renderers={materialRenderers}
              cells={materialCells}
              readonly
              validationMode='NoValidation'
            />
          </div>
        </Grid>
        <Grid item sm={6}>
          <h4 className={classes.title}>Generic Table Render</h4>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              data={data}
              renderers={genericRendering}
              readonly
              validationMode='NoValidation'
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
