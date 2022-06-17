import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
interface IFerramentasDaListagemProps {
  textoDaBUsca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDaBusca?: (novoTexto: string) => void;

  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBUsca = '',
  mostrarInputBusca = false,
  aoMudarTextoDaBusca,
  aoClicarEmNovo,
  mostrarBotaoNovo = true,
  textoBotaoNovo = 'Novo',
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
      {mostrarInputBusca && (
        <TextField
          size="small"
          placeholder="Pesquisar.."
          value={textoDaBUsca}
          onChange={(e) => aoMudarTextoDaBusca?.(e.target.value)} // o ?. só executa a função se ela existir
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            variant="contained"
            disableElevation
            color="primary"
            onClick={aoClicarEmNovo}
            endIcon={<Icon>add</Icon>}
          >
            {textoBotaoNovo}
          </Button>
        )}
      </Box>
    </Box>
  );
};
