import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Layout } from "../../components/layouts";
import { EntryStatus } from "../../interfaces";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

const EntryPage = () => {
  return (
    <Layout title='.... ... ....'>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title='Entrada:' subheader={`Creada hace ... minutos`}></CardHeader>
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
              />

              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup>
                  {validStatus.map((option) => (
                    <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button startIcon={<SaveOutlinedIcon />} variant='contained' fullWidth>
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default EntryPage;
