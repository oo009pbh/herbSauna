import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    .slick {
        .slick-track {
        display: flex;
    
        .slick-slide {
            display: flex;
            height: auto;
        }
        }
    }
    .slick-slide:not(.slick-active) {
        opacity: 0.5;
    }
`;

