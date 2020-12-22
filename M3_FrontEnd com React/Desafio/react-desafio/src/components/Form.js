import React from 'react';

export default function Form({ children }) {
  return <div style={styles.flexRow}>{children}</div>;
}

const styles = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItens: 'center',
    justifyContent: 'space-between',
    marginTop: '100px',
  },
};
