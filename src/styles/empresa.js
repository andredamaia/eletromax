import styled from 'styled-components';

import bgSobre from '../images/bg-sobre.jpg';

export const Container = styled.div`
    .page-title {
        padding: 40px 0;
        background: #AA0E15;
    }
    .page-title h1 { 
        color: #fff; 
        font-weight: 700;
        font-size: 52px;
        line-height: 62px;
    }

    .breadcrumbs {
        padding: 30px 0;
        background: #E8E8E8;
    }

    .breadcrumbs a {
        font-size: 16px;
        color: #696969;
        font-weight: 400;
        display: inline-block;
        margin-right: 15px;
    }

    .breadcrumbs a:last-child {
        color: #E11C25;
        font-weight: 700;
    }

    .breadcrumbs span { 
        display: inline-block; 
        margin-right: 15px;
        color: #696969;
    }

    .content {
        padding: 80px 0;
        background: url(${bgSobre}) center top no-repeat;
        background-size: cover;
    }

    .content .container {
        padding: 0 200px;
    }

    .content p { color: #5A5A5A; }

    .content h2 { position: relative; margin-bottom: 80px; }
    .content h2::after {
        content: '';
        height: 3px;
        width: 120px;
        background: #E11C25;
        bottom: -20px;
        left: 0;
        right: 0;
        margin: auto;
        position: absolute;
    }

    p.text-highlight {
        color: #AA0E15;
        font-size: 54px;
        line-height: 54px;
        font-weight: 700;
    }
`;
