import { kindHeartServicesContactInfo } from "@/lib/data/kindheartservices-contact-info";

export default function GoogleMaps() {
  const mapAddress = `${kindHeartServicesContactInfo.address}, ${kindHeartServicesContactInfo.city}, ${kindHeartServicesContactInfo.state} ${kindHeartServicesContactInfo.zipcode}`;

  return (
    <figure className="w-full pb-0">
      <div className="w-full h-96 overflow-hidden border-y">
        <iframe
          title="Kind Heart Services Location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            mapAddress
          )}&output=embed`}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <figcaption className="sr-only">
        Map showing the location of Kind Heart Services
      </figcaption>
    </figure>
  );
}
