import { vi } from 'date-fns/locale'

export const DEFAULT_DATEPICKER_CONFIG = {
  locale: vi,

  enableTimePicker: false,

  autoApply: true,

  format: 'dd/MM/yyyy',

  minDate: new Date(),

  yearRange: [2026, 2027],
}
