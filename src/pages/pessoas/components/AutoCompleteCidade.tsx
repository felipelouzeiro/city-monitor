import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useDebounce } from '../../../shared/hooks';
import { CidadesService } from '../../../shared/services/api/cidades/CidadesService';

type TAutoCompleteOption = {
  id: number;
  label: string;
};

interface IAutoCompleteCidadeProps {
  isExternalLoading?: boolean;
}

export const AutoCompleteCidade: React.FC<IAutoCompleteCidadeProps> = ({
  isExternalLoading = false,
}) => {
  const [options, setOptions] = useState<TAutoCompleteOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [busca, setBusca] = useState('');

  const { debounce } = useDebounce();

  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      CidadesService.getAll(1, busca).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          // alert(result.message);
        } else {
          console.log(result);

          setOptions(
            result.data.map((cidade) => ({ id: cidade.id, label: cidade.nome }))
          );
        }
      });
    });
  }, [busca]);

  const autoCompleteSelectedOption = useMemo(() => {
    if (!selectedId) return undefined;

    const selectedOption = options.find((opcao) => opcao.id == selectedId);
    return selectedOption;
  }, [selectedId, options]);

  return (
    <Autocomplete
      openText="Abrir"
      closeText="Fechar"
      noOptionsText="Sem opções"
      loadingText="Carregando.."
      disablePortal
      value={autoCompleteSelectedOption}
      options={options}
      loading={isLoading}
      disabled={isExternalLoading}
      onInputChange={(e, newValue) => setBusca(newValue)}
      popupIcon={
        isExternalLoading || isLoading ? (
          <CircularProgress size={28} />
        ) : undefined
      }
      onChange={(e, newValue) => {
        setSelectedId(newValue?.id);
        setBusca('');
      }}
      renderInput={(params) => <TextField {...params} label="Cidade" />}
    />
  );
};
