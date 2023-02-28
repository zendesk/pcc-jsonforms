import { Fragment, useState } from 'react';
import { JsonForms, withJsonFormsControlProps } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import './App.css';
import schema from './schema.json';
import jsltData from './jsltData.json';
import rawData from './rawData.json';
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
// rank=2 := don't apply before rank=1, or after rank=3
// (n.b. with rank=3, the `materialRenderers` are applied)
const genericFallback: RankedTester = rankWith(2, rootNodeTester);
const GenericRendererWithProps = withJsonFormsControlProps(GenericRenderer);
const bundledRendering = [
  ...materialRenderers,
  { tester: genericFallback, renderer: GenericRendererWithProps },
];
const stringifiedRawData = JSON.stringify(rawData, null, 2);

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
              renderers={bundledRendering}
              readonly
              validationMode='NoValidation'
            />
          </div>
        </Grid>
        <Grid item sm={12}>
          <h4 className={classes.title}>Raw JSON</h4>
          <div className={classes.dataContent}>
            <pre>{stringifiedRawData}</pre>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
