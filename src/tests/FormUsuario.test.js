import { render, screen, fireEvent } from "@testing-library/react";
import FormUsuario from "../components/FormUsuario";

describe('FormUsuario componente', () => {

    beforeEach(() => {
        render(<FormUsuario />);
    });

    test('se renderiza el botón', () => {
        const button = screen.getByRole('button', { name: 'Submit' });
        expect(button).toBeInTheDocument();
    });

    test('se renderiza el campo de texto (TextField)', () => {
        const textField = screen.getByRole('textbox');
        expect(textField).toBeInTheDocument();
    });

    test('se renderiza la cabecera de nivel 2 (h2)', () => {
        const header = screen.getByRole('heading', { level: 2 });
        expect(header).toBeInTheDocument();
    });

    test('al hacer clic en el botón, se borra el contenido del campo de texto', () => {
        const textField = screen.getByRole('textbox');
        const button = screen.getByRole('button', { name: 'Submit' });

        fireEvent.change(textField, { target: { value: 'Naiara' } });

        expect(textField.value).toBe('Naiara');

        fireEvent.click(button);

        // Capo se borra despues 
        expect(textField.value).toBe('');
    });
});
