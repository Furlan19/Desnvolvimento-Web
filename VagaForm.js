import React, { useState } from 'react';

function VagaForm() {
  const [formData, setFormData] = useState({
    placa: '',
    proprietario: '',
    apartamento: '',
    bloco: '',
    modelo: '',
    cor: '',
    numeroVaga: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Adicione inputs para cada campo */}
      <input
        name="placa"
        value={formData.placa}
        onChange={handleChange}
        placeholder="Placa do Veículo"
      />
      {/* Repita para os outros campos */}
      <button type="submit">Salvar</button>
    </form>
  );
}

export default VagaForm;