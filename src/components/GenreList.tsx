import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre}: Props) => {
	const { data: genres, isLoading, error } = useGenre();

	// Need for these since the data is static and not fetched
	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
			<List>
				{genres.map((genre) => (
					<ListItem key={genre.id} paddingY="5px">
						<HStack>
							<Image
								boxSize="32px"
								borderRadius="8px"
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant="link" fontSize="lg">
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
