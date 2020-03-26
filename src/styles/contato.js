import styled from 'styled-components';

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
        position: absolute;
    }

    form {}
    form input {
        width: 100%;
        height: 60px;
        border: 2px solid #C5C5C5;
        padding: 0 20px;
        line-height: 60px;
        border-radius: 12px;
        margin-bottom: 15px;
    }
    form textarea {
        width: 100%;
        height: 200px;
        border: 2px solid #C5C5C5;
        padding: 20px;
        border-radius: 12px;
        margin-bottom: 15px;
    }
    form button {

    }

    .light-red {
        background: #E11C25;
        background-size: cover;
        color: #fff;
        padding: 30px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
        margin-bottom: 20px;
    }

    .light-red svg { margin-right: 20px; width: 25px; }

    .light-red span { 
        display: block; 
        text-align: left; 
        font-weight: 500; 
        font-size: 20px; 
        margin-bottom: 10px;
    }
    .light-red p { margin: 0; color: #fff; font-size: 16px; }
`;
