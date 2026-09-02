'use client';

import { useSettings } from '@/hooks/use-settings';
import { churchConfig } from '@/church.config';

export function AddressValue() {
  const { settings } = useSettings();
  const address = settings?.address;

  return (
    <address className="not-italic text-[14.5px] text-ink-soft">
      {address?.addressLine1 || churchConfig.address.line1}
      <br />
      {address ? [address.town, address.postcode].filter(Boolean).join(', ') : churchConfig.address.line2}
    </address>
  );
}

export function PhoneValue() {
  const { settings } = useSettings();
  return <p className="text-[14.5px] text-ink-soft">{settings?.mobile || '[Phone — to be confirmed]'}</p>;
}

export function EmailValue() {
  const { settings } = useSettings();
  const email = settings?.email || 'mfmpeterborough@gmail.com';
  return (
    <a href={`mailto:${email}`} className="text-[14.5px] text-indigo hover:text-indigo-deep">
      {email}
    </a>
  );
}
