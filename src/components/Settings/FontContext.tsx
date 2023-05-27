// import React, { useReducer, createContext, ReactNode } from 'react';

// interface FontState {
//   font: string;
// }

// export type FontAction =
//   | { type: 'SELECT_FONT_MONOSPACE' }
//   | { type: 'SELECT_FONT_SANS_SERIF' }
//   | { type: 'SELECT_FONT_SERIF' };

// const initialState: FontState = {
//   font: 'sans-serif', // Initial font selection
// };

// export const FontReducer = (
//   state: FontState = initialState,
//   action: FontAction
// ): FontState => {
//   let font = state.font;

//   switch (action.type) {
//     case 'SELECT_FONT_MONOSPACE':
//       font = 'monospace';
//       break;
//     case 'SELECT_FONT_SANS_SERIF':
//       font = 'sans-serif';
//       break;
//     case 'SELECT_FONT_SERIF':
//       font = 'serif';
//       break;
//     default:
//       break;
//   }

//   return {
//     ...state,
//     font: font,
//   };
// };

// export const FontContext = createContext<[FontState, React.Dispatch<FontAction>]>(
//   [initialState, () => {}]
// );

// interface FontProviderProps {
//   children: ReactNode;
// }

// export const FontProvider = ({ children }: FontProviderProps) => {
//   const [state, dispatch] = useReducer(FontReducer, initialState);

//   return (
//     <FontContext.Provider value={[state, dispatch]}>
//       {children}
//     </FontContext.Provider>
//   );
// };
