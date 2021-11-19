import styled from 'styled-components';

const getHeatmapBackground = ({ numOfPosts, theme }) => {
    const heatmapColors = theme.heatmap.hourColors;

    return numOfPosts >= heatmapColors.length
        ? heatmapColors[heatmapColors.length - 1]
        : heatmapColors[numOfPosts];
};

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th``;

const Table = styled.table`
    width: ${props => props.theme.heatmap.size.width}px;
    max-width: 100%;
    margin: auto;
    border: none;
    border-collapse: collapse;
`;

const TimeHeader = styled.th`
    color: ${props => props.theme.heatmap.timeHeaderColor};
    width: ${props => props.theme.heatmap.size.timeHeaderWidth}px;
    height: ${props => props.theme.heatmap.size.timeHeaderHeight}px;
    font-size: 14px;
    background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
`;

const DaysHeader = styled.th`
    background-color: ${props => props.theme.heatmap.daysColor};
    color: ${props => props.theme.color.lightest};
    padding: 10px;
    font-size: 15px;
    width: ${props => props.theme.heatmap.daysHeaderWidth}px;
`;

const Td = styled.td`
    padding: 0;
`;

const TCells = styled.button`
    font-family: ${props => props.theme.font.family.default};
    font-weight: 700;
    width: ${props => props.theme.heatmap.size.cellsWidth + 2}px;
    height: ${props => props.theme.heatmap.size.cellsWidth + 5}px;
    text-align: center;
    background-color: ${props => getHeatmapBackground(props)};
    cursor: pointer;
    color: ${props => props.theme.color.lightest};
    border: none;

    :hover,
    ::selection,
    :focus {
        border: 1px solid ${props => props.theme.heatmap.highlightColor};
    }
`;

export { Table, Tbody, TimeHeader, Thead, Tr, TCells, DaysHeader, Th, Td };
