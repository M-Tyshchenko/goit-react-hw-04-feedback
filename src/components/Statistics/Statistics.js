import { Container, Text } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePerc }) => {
  return (
    <Container>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {positivePerc}%</Text>
    </Container>
  );
};
