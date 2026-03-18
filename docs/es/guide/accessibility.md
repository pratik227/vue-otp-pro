# Accesibilidad

Vue OTP Pro está construido con la accesibilidad en mente.

## Soporte ARIA

- El contenedor tiene `role="group"`
- Cada input tiene un `aria-label` como "OTP Input digit 1"
- Personaliza el prefijo con la prop `ariaLabel`

```vue
<OtpInput aria-label="Código de verificación" />
```

## Navegación por Teclado

| Tecla | Acción |
|-------|--------|
| `0-9` | Ingresar dígito, avanzar al siguiente |
| `Backspace` | Limpiar actual o mover al anterior |
| `Delete` | Limpiar input actual |
| `ArrowLeft` | Mover foco al input anterior |
| `ArrowRight` | Mover foco al siguiente input |
| `Tab` | Navegación estándar por tab |
| `Enter` | Emite evento `complete` si todos están llenos |
| `Ctrl/Cmd + V` | Pegar desde portapapeles |

## Móvil

- `inputmode="numeric"` muestra el teclado numérico en móvil
- Autocompletado SMS iOS soportado via `autocomplete="one-time-code"`
- El manejo de pegado elimina delimitadores automáticamente
- La composición IME (chino, japonés, coreano) se valida al completar

## Deshabilitado vs Solo Lectura

| Estado | Interacción | Apariencia |
|--------|-------------|------------|
| Normal | Input completo | Estándar |
| `disabled` | Sin interacción | 45% opacidad |
| `readonly` | Solo foco/selección | 70% opacidad |
