import { useMediaQuery } from '@react-hook/media-query';

export const useScreenSize = () => {
    const largeScreen = useMediaQuery('only screen and (min-width: 480px) and (min-height: 480px)');
    //   const largeScreen = useMediaQuery('only screen and (min-width: 480px)');

    return largeScreen;
};