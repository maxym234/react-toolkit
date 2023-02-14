import styled from 'styled-components';
import Table from 'antd/lib/table';

export const TableStyled = styled(Table)`
    display: flex;
    width: 150px;
    .ant-select-selector {
        border: 1px solid #d9d9d9 !important;
        box-shadow: none !important;
    }
    :hover {
        .ant-select-selector {
            border-color: #7e6d6d !important;
            box-shadow: 0px 2px 11px #0000003d !important;
        }
    }    

`;