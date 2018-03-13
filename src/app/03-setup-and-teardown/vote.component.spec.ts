import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {

  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {
    // Arrange(organizar)
   // component = new VoteComponent();

    // Act(agir)
    component.upVote();

    // Assert(afirmar)
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvotes', () => {
    // Arrange(organizar)
    // component = new VoteComponent();

    // Act(agir)
    component.downVote();

    // Assert(afirmar)
    expect(component.totalVotes).toBe(-1);
  });
});