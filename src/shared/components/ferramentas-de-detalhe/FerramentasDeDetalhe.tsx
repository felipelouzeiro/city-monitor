import {
  Box,
  Button,
  Divider,
  Icon,
  Paper,
  Skeleton,
  Typography,
  useMediaQuery,
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
  const smUp = useMediaQuery(theme.breakpoints.up('sm'));
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

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
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoSalvarEVoltar &&
        !mostrarBotaoSalvarEVoltarCarregando &&
        mdUp && (
          <Button
            variant="outlined"
            disableElevation
            color="primary"
            onClick={aoClicarEmSalvarEVoltar}
            startIcon={<Icon>save</Icon>}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Salvar e voltar
            </Typography>
          </Button>
        )}
      {mostrarBotaoSalvarEVoltarCarregando && mdUp && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && !mostrarBotaoApagarCarregando && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && <Skeleton width={110} height={60} />}

      {mostrarBotaoNovo && !mostrarBotaoNovoCarregando && smUp && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && smUp && (
        <Skeleton width={110} height={60} />
      )}

      {mostrarBotaoVoltar &&
        (mostrarBotaoNovo ||
          mostrarBotaoSalvar ||
          mostrarBotaoSalvarEVoltar ||
          mostrarBotaoApagar) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando && (
        <Button
          variant="outlined"
          disableElevation
          color="primary"
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Voltar
          </Typography>
        </Button>
      )}
      {mostrarBotaoVoltarCarregando && <Skeleton width={110} height={60} />}
    </Box>
  );
};
