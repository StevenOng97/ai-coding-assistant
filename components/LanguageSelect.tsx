import type { FC } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  language: string;
  onChange: (language: string) => void;
}

export const LanguageSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: any) => {
    onChange(e);
  };

  return (
    <Select value={language} onValueChange={handleChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        {languages
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.label}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

const languages = [
  { value: 'Pascal', label: 'Pascal' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Python', label: 'Python' },
  { value: 'Go', label: 'Go' },
  { value: 'C', label: 'C' },
  { value: 'C++', label: 'C++' },
  { value: 'Java', label: 'Java' },
  { value: 'C#', label: 'C#' },
  { value: '.NET', label: '.NET' },
  { value: 'Assembly Language', label: 'Assembly Language' },
  { value: 'PHP', label: 'PHP' },
  { value: 'Ruby', label: 'Ruby' },
  { value: 'Swift', label: 'Swift' },
  { value: 'SwiftUI', label: 'SwiftUI' },
  { value: 'Kotlin', label: 'Kotlin' },
  { value: 'Scala', label: 'Scala' },
  { value: 'Dart', label: 'Dart' },
  { value: 'Rust', label: 'Rust' },
  { value: 'Natural Language', label: 'Natural Language' },
];
