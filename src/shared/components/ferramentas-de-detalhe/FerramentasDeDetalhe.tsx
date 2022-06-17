import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  useTheme,
} from '@mui/material';
interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEVoltar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEVoltarCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEVoltar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoSalvarEVoltar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoSalvarEVoltarCarregando = false,

  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmApagar,
  aoClicarEmSalvarEVoltar,
  aoClicarEmVoltar,
}) => {
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
      {mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando && (
        <Button
          variant="contained"
          disableElevation
          color="primary"
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          Salvar
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}
      {mostrarBotaoSalvarEVoltar && !mostrarBotaoSalvarEVoltarCarregando && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmSalvarEVoltar}
          startIcon={<Icon>save</Icon>}
        >
          Salvar e voltar
        </Button>
      )}
      {mostrarBotaoSalvarEVoltarCarregando && !mostrarBotaoApagarCarregando && (
        <Skeleton width={180} height={60} />
      )}
      {mostrarBotaoApagar && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          Apagar
        </Button>
      )}
      {mostrarBotaoApagarCarregando && !mostrarBotaoNovoCarregando && (
        <Skeleton width={110} height={60} />
      )}
      {mostrarBotaoNovo && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}
      {mostrarBotaoNovoCarregando && !mostrarBotaoVoltarCarregando && (
        <Skeleton width={110} height={60} />
      )}
      <Divider variant="middle" orientation="vertical" />
      {mostrarBotaoVoltar && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          Voltar
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
