'use client';

import { Clock, Phone, MapPin } from 'lucide-react';
import { useSettings } from '@/hooks/use-settings';
import { churchConfig } from '@/church.config';

const ITEMS = [
  { icon: Clock,  iconBg: '#F4E3C1', iconColor: '#8C6420', label: 'Service Times' },
  { icon: Phone,  iconBg: '#EDE6F5', iconColor: '#5B0FA8', label: 'Main Line' },
  { icon: MapPin, iconBg: '#FDEBD8', iconColor: '#B24500', label: 'Address' },
];

export function InfoBar() {
  const { settings } = useSettings();
  const phone = settings?.mobile || '[Phone — to be confirmed]';
  const address = settings?.address
    ? `${settings.address.addressLine1}, ${settings.address.town} ${settings.address.postcode}`
    : `${churchConfig.address.line1}, ${churchConfig.address.line2}`;
  const values = [
    { main: 'Sun: 9:00am & 11:00am', sub: 'Midweek — see service times' },
    { main: phone,                    sub: 'Main Line' },
    { main: address,                  sub: '' },
  ];

  return (
    <div className="w-full bg-[#F5F0E8] py-5">
      <div className="max-w-[1200px] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ITEMS.map(({ icon: Icon, iconBg, iconColor, label }, i) => (
          <div key={label} className="bg-white rounded-lg px-5 py-4 flex items-center gap-4 shadow-sm border border-[rgba(0,0,0,0.07)]">
            <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
              style={{ background: iconBg }}>
              <Icon size={19} style={{ color: iconColor }} />
            </div>
            <div>
              <div className="font-semibold text-[14px] text-ink leading-snug">{values[i].main}</div>
              {values[i].sub && <div className="text-[12.5px] text-ink-soft mt-0.5">{values[i].sub}</div>}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
