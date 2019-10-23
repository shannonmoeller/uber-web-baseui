/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import Blank from '../icon/blank.js';
import ChevronDown from '../icon/chevron-down.js';
import ChevronUp from '../icon/chevron-up.js';
import {styled, withStyle} from '../styles/index.js';

export const StyledRoot = styled<{}>('div', ({$theme}) => {
  return {
    ...$theme.borders.border300,
    position: 'relative',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    backgroundColor: $theme.colors.tableBackground,
    borderTopLeftRadius: $theme.borders.radius200,
    borderTopRightRadius: $theme.borders.radius200,
    borderBottomRightRadius: $theme.borders.radius200,
    borderBottomLeftRadius: $theme.borders.radius200,
  };
});

type StyledTablePropsT = {
  $width?: ?string,
};

export const StyledTable = styled<StyleTablePropsT>(
  'table',
  ({$theme, $width}) => {
    return {
      borderCollapse: 'collapse',
      boxSizing: 'border-box',
      minWidth: '100%',
      width: $width || null,
    };
  },
);

export const StyledTableHead = styled<{}>('thead', ({$theme}) => {
  return {};
});

export const StyledTableHeadRow = styled<{}>('tr', ({$theme}) => {
  return {};
});

export const StyledTableHeadCell = styled<{}>('th', ({$theme}) => {
  const borderLeft = Object.values($theme.borders.border300).join(' ');

  return {
    ...$theme.typography.font350,
    position: 'sticky',
    top: 0,
    paddingTop: $theme.sizing.scale500,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale500,
    paddingLeft: $theme.sizing.scale600,
    backgroundColor: $theme.colors.tableHeadBackgroundColor,
    color: $theme.colors.colorPrimary,
    textAlign: 'left',
    verticalAlign: 'top',
    whiteSpace: 'nowrap',

    '::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '100%',
      bottom: '0',
      borderLeft,
    },

    '::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      right: '0',
      left: '0',
      height: $theme.sizing.scale100,
      pointerEvents: 'none',
      backgroundImage: `
        linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.16),
          rgba(0, 0, 0, 0)
        )
      `,
    },
  };
});

export const StyledTableHeadCellSortable = withStyle<{}>(
  StyledTableHeadCell,
  ({$theme}) => {
    return {
      cursor: 'pointer',
      paddingRight: $theme.sizing.scale1000,

      ':focus': {
        backgroundColor: $theme.colors.tableStripedBackground,
      },

      ':hover': {
        backgroundColor: $theme.colors.tableStripedBackground,
      },
    };
  },
);

export const StyledSortAscIcon = styled<{}>(ChevronDown, ({$theme}) => {
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)',
  };
});

export const StyledSortDescIcon = styled<{}>(ChevronUp, ({$theme}) => {
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)',
  };
});

export const StyledSortNoneIcon = styled<{}>(Blank, ({$theme}) => {
  return {
    position: 'absolute',
    top: '50%',
    right: $theme.sizing.scale500,
    transform: 'translateY(-50%)',
  };
});

export const StyledTableBody = styled<{}>('tbody', ({$theme}) => {
  return {};
});

export const StyledTableBodyRow = styled<{}>('tr', ({$theme}) => {
  return {
    ':hover': {
      backgroundColor: $theme.colors.tableStripedBackground,
    },
  };
});

type StyledTableBodyCellPropsT = {
  $isNumeric?: ?boolean,
};

export const StyledTableBodyCell = styled<StyledTableBodyCellPropsT>(
  'td',
  ({$theme, $isNumeric}) => {
    return {
      paddingTop: $theme.sizing.scale300,
      paddingRight: $theme.sizing.scale600,
      paddingBottom: $theme.sizing.scale300,
      paddingLeft: $theme.sizing.scale600,
      color: $theme.colors.colorPrimary,
      textAlign: $isNumeric ? 'right' : null,
      verticalAlign: 'top',
    };
  },
);
