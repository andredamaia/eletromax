import styled from 'styled-components';

export const Container = styled.div`
  .boxes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
}

    .boxes span { 
        display: block; 
        text-align: left; 
        font-weight: 500; 
        font-size: 28px; 
    }
    .boxes p { margin: 0; }

    .bg-box .red-left {
        background: #AA0E15;
        color: #fff;
        background-size: cover;
        text-align: left;
        position: relative;
        padding: 60px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
    }

    .bg-box .red-left::before{
        content: "";
        width: 4000px;
        height: 100%;
        position: absolute;
        top:0;
        right: 100%;
        background: #AA0E15;

    }

    .bg-box .red-right::before{
        content: "";
        width: 4000px;
        height: 100%;
        position: absolute;
        top:0;
        left: 99%;
        background: #AA0E15;
    }


    .bg-box .red-right {
        background: #AA0E15;
        color: #fff;
        background-size: cover;
        text-align: left;
        padding: 60px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
    }

    .bg-box .light-red {
        background: #E11C25;
        background-size: cover;
        color: #fff;
        padding: 60px;
        display: flex;
        flex-direction: row;
        justify-content: left;
        align-items: flex-start;
    }

    .bg-box img {
        margin-right: 30px;
    }

    .red-right p, .red-left p, .light-red p { 
        font-size: 16px; 
        padding: 20px 0; 
        line-height: 20px; 
    }
`;
