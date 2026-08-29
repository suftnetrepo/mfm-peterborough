'use client';

import { useRegularServices } from '@/hooks/use-regular-services';

export function AnnouncementBar() {
  const { services } = useRegularServices();
  const sunday = services.find(s => /sun/i.test(s.title));
  const time = sunday?.start_time || '9:00 &amp; 11:00';

  return (
    <div className="bg-indigo-deep text-white text-sm text-center py-2.5 px-5">
      Sunday worship at {time} —{' '}
      <a href="/new-here" className="text-gold font-medium hover:underline">
        plan your visit
      </a>
    </div>
  );
}
