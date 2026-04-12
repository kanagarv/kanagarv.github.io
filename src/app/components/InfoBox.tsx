import { ImageWithFallback } from "./figma/ImageWithFallback";

interface InfoBoxProps {
  name: string;
  imageUrl: string;
  occupation: string;
  location: string;
  email: string;
  linkedin: string;
  website: string;
  education: string;
  yearsActive: string;
}

export function InfoBox({
  name,
  imageUrl,
  occupation,
  location,
  email,
  linkedin,
  website,
  education,
  yearsActive,
}: InfoBoxProps) {
  return (
    <div className="bg-gray-50 border border-gray-300 w-80 float-right ml-4 mb-4">
      <div className="bg-gray-200 px-4 py-2 text-center font-semibold border-b border-gray-300">
        {name}
      </div>

      <div className="p-4">
        <ImageWithFallback
          src={imageUrl}
          alt={name}
          className="w-full h-auto mb-3"
        />

        <table className="w-full text-sm">
          <tbody>
            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                Occupation
              </td>
              <td className="py-2">{occupation}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                Education
              </td>
              <td className="py-2">{education}</td>
            </tr>

            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                Location
              </td>
              <td className="py-2">{location}</td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                Email
              </td>
              <td className="py-2">
                <a
                  href={`mailto:${email}`}
                  className="text-blue-600 hover:underline"
                >
                  {email}
                </a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                LinkedIn
              </td>
              <td className="py-2">
                <a
                  href={linkedin}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Profile
                </a>
              </td>
            </tr>
            <tr className="border-t border-gray-300">
              <td className="py-2 pr-2 font-semibold align-top">
                Website
              </td>
              <td className="py-2">
                <a
                  href={website}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {website}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}