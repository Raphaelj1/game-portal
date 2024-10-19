import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenre, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data: genres, isLoading, error } = useGenre();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="5px">
					<HStack>
						<Image
							boxSize="32px"
							borderRadius="8px"
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button onClick={() => onSelectGenre(genre)} variant="link" fontSize="lg">
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
