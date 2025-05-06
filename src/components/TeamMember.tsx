
import { TeamMember } from "../data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform hover:shadow-lg">
      <div className="w-36 h-36 mb-4 rounded-full overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-medium text-gray-900">{member.name}</h3>
      <p className="text-sage-500 mb-3">{member.position}</p>
      <p className="text-gray-600 text-center">{member.bio}</p>
    </div>
  );
};

export default TeamMemberCard;
