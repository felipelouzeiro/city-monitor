import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FerramentasDeDetalhe } from '../../shared/components';
import { LayoutBaseDePagina } from '../../shared/layouts';
import { PessoaService } from '../../shared/services/api/pessoas/PessoasService';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { VTextField } from '../../shared/forms';

interface IFormData {
  email: string;
  cidadeId: string;
  nomeCompleto: string;
}

export const DetalheDePessoas = () => {
  const { id = 'nova' } = useParams<'id'>();
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (id !== 'nova') {
      setIsLoading(true);
      PessoaService.getById(Number(id)).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          navigate('/pessoas');
        } else {
          console.log(result);
          setNome(result.nomeCompleto);
        }
      });
    }
  }, [id]);

  const handleSave = (dados: IFormData) => {
    console.log(dados);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Realmente deseja apagar?')) {
      PessoaService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          alert('Registro apagado com sucesso!');
          navigate('/pessoas');
        }
      });
    }
  };

  return (
    <LayoutBaseDePagina
      titulo={id === 'nova' ? 'Nova pessoa' : nome}
      barraDeFerramentas={
        <FerramentasDeDetalhe
          textoBotaoNovo="Nova"
          mostrarBotaoSalvarEVoltar
          mostrarBotaoNovo={id !== 'nova'}
          mostrarBotaoApagar={id !== 'nova'}
          //
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmSalvarEVoltar={() => () => formRef.current?.submitForm()}
          aoClicarEmApagar={() => handleDelete(Number(id))}
          aoClicarEmVoltar={() => navigate('/pessoas')}
          aoClicarEmNovo={() => navigate('/pessoas/detalhe/nova')}
        />
      }
    >
      <Form ref={formRef} onSubmit={(dados) => handleSave(dados)}>
        <VTextField name="nomeCompleto" />
        <VTextField name="email" />
        <VTextField name="cidadeId" />
      </Form>
    </LayoutBaseDePagina>
  );
};
