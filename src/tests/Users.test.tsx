
// import useAxios from '../components/hooks/useAxios';
// import Users from '../pages/Users';
// import { render, screen } from '@testing-library/react';

// jest.mock('../components/hooks/SearchContext', () => ({
//   useSearch: jest.fn(() => ({ debouncedSearch: '' })),
// }));

// jest.mock('../components/hooks/useAxios', () => ({
//     __esModule: true,
//     default: jest.fn().mockReturnValue({ axiosHandler: jest.fn() }),
//   }));

// describe('Users Component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders loading spinner when isLoading is true', async () => {
//     (useAxios as jest.Mock).mockImplementationOnce(() => ({
//       axiosHandler: jest.fn().mockResolvedValueOnce([]),
//     }));

//     render(<Users />);

//     const loadingSpinner = screen.getByTestId('loading-spinner');
//     expect(loadingSpinner).toBeInTheDocument();
//   });

// });
