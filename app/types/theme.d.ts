export interface ThemeScheme {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    error: string;
    onError: string;
  }
  
  export interface Theme {
    light: ThemeScheme;
    dark: ThemeScheme;
  };