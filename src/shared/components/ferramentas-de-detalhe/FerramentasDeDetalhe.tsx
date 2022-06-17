import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  TextField,
  useTheme,
} from '@mui/material';
interface IFerramentasDeDetalheProps {
  textoDaBUsca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;

  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDeDetalhe: React.FC<
  IFerramentasDeDetalheProps
> = ({}) => {
  const theme = useTheme();

  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display={'flex'}
      alignItems={'center'}
      height={theme.spacing(5)}
      component={Paper}
    >
      <Button
        variant="contained"
        disableElevation
        color="primary"
        // onClick={aoClicarEmNovo}
        startIcon={<Icon>save</Icon>}
      >
        Salvar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        // onClick={aoClicarEmNovo}
        startIcon={<Icon>save</Icon>}
      >
        Salvar e voltar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        // onClick={aoClicarEmNovo}
        startIcon={<Icon>delete</Icon>}
      >
        Apagar
      </Button>
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        // onClick={aoClicarEmNovo}
        startIcon={<Icon>add</Icon>}
      >
        Novo
      </Button>
      <Divider variant="middle" orientation="vertical" />
      <Button
        variant="outlined"
        disableElevation
        color="primary"
        // onClick={aoClicarEmNovo}
        startIcon={<Icon>arrow_back</Icon>}
      >
        Voltar
      </Button>
    </Box>
  );
};
